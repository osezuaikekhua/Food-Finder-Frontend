import loadingImg from "../assets/loading.png"

const Loading = () => {
  return (
    <div className=" center flex flex-col items-center">
        <img src={loadingImg} alt="" width="100" className="animate-spin"/>
        <h2 className="text-lg">Loading...</h2>
      </div>
  )
}

export default Loading