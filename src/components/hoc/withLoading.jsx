import Loader from "../Loader"

// eslint-disable-next-line no-unused-vars
const WithLoading = (Component) => {
    return ({ data }) => {
        return (data && (data.length || Object.keys(data).length > 0)) ? (<Component data={data} />)
            : (<div className='flex justify-center items-center min-h-96'>
                <Loader />
            </div>)
    }
}

export default WithLoading