//create a composable function to store, retrieve, update and delete notes from the local storage

import { ref, onMounted } from 'vue'
import { type Note } from '@/types/notes'

export const useNotes = () => {
  const storage = ref<Storage>()
  const notes = ref<Note[]>([])

  onMounted(() => {
    //initialize localstorage
    storage.value = localStorage

    //set empty array if no notes in localstorage
    if (!storage.value.getItem('notes')) {
      storage.value.setItem('notes', JSON.stringify([]))
    }

    console.log(JSON.parse(storage.value.getItem('notes')!))
  })

  //get all notes
  const getAllNotes = () => {
    if (!storage.value) return

    const notesData = storage.value.getItem('notes')
    if (notesData) {
      notes.value = JSON.parse(notesData)
    }
  }

  // get a single note
  const getNote = (id: string) => {
    if (!storage.value) return
    const note = notes.value.find((note) => note.id === id)
    return note
  }

  const setNotes = () => {
    if (!storage.value) return
    storage.value.setItem('notes', JSON.stringify(notes.value))
  }

  const addNote = (note: Note) => {
    if (!storage.value) return
    notes.value.push(note)
    setNotes()
  }

  const updateNote = (note: Note, id: string) => {
    if (!storage.value) return
    const index = notes.value.findIndex((note) => note.id === id)
    notes.value[index] = note
    setNotes()
  }

  const deleteNote = (id: string) => {
    if (!storage.value) return
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
