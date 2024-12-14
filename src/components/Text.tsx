
const TextField = ({placeholder, type, name, onChange, value, className}:any) => {

  return (
    <div className='mb-4'>
        <input
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
        name={name}
        value={value}
        className={`block border border-textPrimary rounded-md shadow-sm  sm:text-sm p-2 ${className}`}
        />
      
    </div>
  )
}

export default TextField
