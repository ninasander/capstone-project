export default function useCreatureForm(addCreatureEntry) {
  // useJournalForm(addEntry)
  const onAddCreature = (entry) => {
    //onSave
    addCreatureEntry(entry) // addEntry(entry)
  }

  return { onAddCreature } //onSave
}
