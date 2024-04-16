

const Box = ({children, ...props}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg" {...props}>{children}</div>
  )
}

export default Box