//create a composable function to store, retrieve, update and delete notes from the local storage

import { ref, onMounted } from 'vue'
import { type Note } from '@/types/notes'

export const useNotes = () => {
  const notes = ref<Note[]>([])

  onMounted(() => {
    //set empty array if no notes in localstorage
    if (!localStorage.getItem('notes')) {
      localStorage.setItem('notes', JSON.stringify([]))
    } else {
      getAllNotes()
    }
  })

  //get all notes
  const getAllNotes = () => {
    if (!localStorage) return

    const notesData = localStorage.getItem('notes')
    if (notesData) {
      notes.value = JSON.parse(notesData)
    }
    return notes.value
  }

  // get a single note
  const getNote = (id: string) => {
    if (!localStorage) return
    const note = notes.value.find((note) => note.id === id)
    return note
  }

  const setNotes = () => {
    if (!localStorage) return
    localStorage.setItem('notes', JSON.stringify(notes.value))
  }

  const addNote = (note: Note) => {
    if (!localStorage) return
    notes.value.push(note)

    setNotes()
  }

  const updateNote = (note: Note, id: string) => {
    if (!localStorage) return
    const index = notes.value.findIndex((note) => note.id === id)
    notes.value[index] = note
    setNotes()
  }

  const deleteNote = (id: string) => {
    if (!localStorage) return
    const index = notes.value.findIndex((note) => note.id === id)
    notes.value.splice(index, 1)
    setNotes()
  }

  return {
    getAllNotes,
    getNote,
    addNote,
    updateNote,
    deleteNote
  }
}
