import data from '../data.json'

const Product = () => {
    return (
        <>
            <div style={{ paddingTop: '0px', justifyContent: 'center' }}>
                {
                    data.map((val) => (
                        <div key={val.id}>
                            <div style={{ border: '2px solid', margin: '70px', display: 'flex' }}>
                                <div style={{ float: 'left' }}>
                                    <img style={{ height: '350px', width: '300px', objectFit: 'contain' }} src={val.image}></img>
                                </div>
                                <div style={{ float: 'right', justifyContent: 'center', padding: '50px' }}>
                                    <h1 style={{ paddingBottom: '0' }}>{val.title}</h1>
                                    <h2>Brand : {val.brand}</h2>
                                    <h3>Description : {val.description}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                };

            </div>

        </>
    )
}

export default Product