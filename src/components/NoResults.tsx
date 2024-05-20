import noResultsImg from "../assets/noResults.avif"

//MAKE PROP
type Props = {
    Text?: string;
}

const NoResults = ({Text = "No Results Found"}:Props) => {
  return (
    <div className=" center flex flex-col items-center">
        <img src={noResultsImg} alt="" width="100" />
        <h2 className="text-lg">{Text}</h2> 
      </div>
  )
}

export default NoResults