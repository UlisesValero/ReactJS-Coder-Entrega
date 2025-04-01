import Loader from "../Loader"

const withLoading = (Component) => {
    return ({ data }) => {
        console.log()
        return (data && (data.length || Object.keys(data).length > 0)) ? (<Component data={data} />)
            : (<div className='flex justify-center items-center min-h-96'>
                <Loader />
            </div>)
    }
}

export default withLoading