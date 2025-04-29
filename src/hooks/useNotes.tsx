import { zodResolver } from "@hookform/resolvers/zod";
import { INote } from "@interfaces/inote";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actAddNote from "@store/notes/act/actAddNote";
import actDeleteNote from "@store/notes/act/actDeleteNote";
import actGetUserNotes from "@store/notes/act/actGetUserNotes";
import actUpdateNote from "@store/notes/act/actUpdateNote";
import { noteSchema, TNote } from "@validations/noteSchema";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useNotes() {
  const dispatch = useAppDispatch();
  const {loading, notes} = useAppSelector(state => state.notes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  useEffect(() => {
    dispatch(actGetUserNotes())
  }, [dispatch])
  const {register, handleSubmit, reset, formState: {errors: formError}, setValue} = useForm<TNote>({
    mode: 'onTouched',
    resolver: zodResolver(noteSchema)
  })
  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    reset();
    setIsEditMode(false);
    setEditingNoteId(null);
  }
  const deleteNote = (noteId: string) => {
    dispatch(actDeleteNote(noteId)).unwrap().then(() => {
      dispatch(actGetUserNotes())
      setIsEditMode(false)
    })
  }
  const updateNote = (note: INote) => {
    setIsModalOpen(true);
    setIsEditMode(true);
    setEditingNoteId(note._id);
    setValue("title", note.title);
    setValue("content", note.content);
  }
  const submitForm: SubmitHandler<TNote> = (data) => {
    const action = isEditMode && editingNoteId ? actUpdateNote({...data, _id: editingNoteId}) : actAddNote(data);
    dispatch(action).unwrap().then(() => {
      dispatch(actGetUserNotes())
      setIsModalOpen(false);
      reset();
      setIsEditMode(false);
      setEditingNoteId(null);
    })
  }
  return {loading, notes, isEditMode, deleteNote, updateNote, isModalOpen, openModal, closeModal, submitForm, register, handleSubmit, formError}
}
