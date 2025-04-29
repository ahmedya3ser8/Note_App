import Input from "@components/forms/Input/Input";
import useNotes from "@hooks/useNotes";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const {register, handleSubmit, formError, notes, deleteNote, updateNote, closeModal, isModalOpen, loading, openModal, submitForm, isEditMode} = useNotes()
  const filteredList = notes.filter((note) => note.title.toLowerCase().includes(searchInput.toLowerCase()))
  const renderList = filteredList.map((note) => (
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
        <button className="w-full p-2 bg-blue-500 text-white rounded-md" onClick={() => updateNote(note)}>Update</button>
        <button className="w-full p-2 bg-red-500 text-white rounded-md" onClick={() => deleteNote(note._id)}>Delete</button>
      </div>
    </div>
  ));
  return (
    <section className="py-10">
      {loading === "pending" ? (
        <div className="flex items-center justify-center h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <button className="p-2 bg-green-500 text-white rounded-md" onClick={() => openModal()}>Add New Note</button>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="search" placeholder="search..." className="p-2 rounded-md border border-[#ccc] outline-none focus:border-[#ccc] focus:shadow-none focus:ring-0 focus:outline-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {renderList}
          </div>
          {isModalOpen && <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">{isEditMode ? 'Update' : 'Add'} Note</h2>
                  <button className="text-gray-500 text-2xl hover:text-gray-700" onClick={() => closeModal()}>
                    &times;
                  </button>
                </div>
                {/* Modal Body */}
                <form className="mb-4" onSubmit={handleSubmit(submitForm)}>
                  <Input label="title" name="title" register={register} error={formError.title?.message as string} />
                  <Input label="content" name="content" register={register} error={formError.content?.message as string} />
                  {/* Modal Footer */}
                  <div className="flex justify-end space-x-2">
                    <button type="button" className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300" onClick={() => closeModal()}>close</button>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">{isEditMode ? 'update' : 'add'}</button>
                  </div>
                </form>
              </div>
            </div>
          </>}
        </>
      )}
    </section>
  )
}
