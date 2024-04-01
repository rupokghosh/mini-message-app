
const TextInput = ( value, onChange) => {
  return (
    <div>
      <input type="text" placeholder="type your message..." value={value} onChange={onChange}/>
    </div>
  )
}

export default TextInput