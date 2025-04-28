import { useAppDispatch, useAppSelector } from "@store/hooks"
import actGetUserNotes from "@store/notes/act/actGetUserNotes";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const {loading, error, notes} = useAppSelector(state => state.notes);
  useEffect(() => {
    dispatch(actGetUserNotes())
  }, [dispatch])
  const renderList =notes.map((note) => (
    <div className="bg-gray-50 shadow-md p-3 rounded-md" key={note._id}>
      <div className="mb-2">
        <h2 className="font-semibold text-xl">Title :</h2>
        <p>{note.title}</p>
      </div>
      <div className="mb-3">
        <h2 className="font-semibold text-xl">Content :</h2>
        <p>{note.content}</p>
      </div>
      <div className="flex flex-col gap-3">
        <button className="w-full p-2 bg-blue-500 text-white rounded-md" >Update</button>
        <button className="w-full p-2 bg-red-500 text-white rounded-md">Delete</button>
      </div>
    </div>
  ));
  return (
    <section className="py-10">
      {loading === "pending" ? (
        <div className="flex items-center justify-center h-full">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {renderList}
        </div>
      )}
    </section>
  )
}
