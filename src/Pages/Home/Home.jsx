
import banner from '../../assets/home/Rectangle 2 (4).png'
// import vector from '../../assets/home/Vector.png'
const Home = () => {
    const data =[
        {
            id:'1',
            num:'2000+'
        },
        {
            id:'2',
            num:'3000+'
        },
        {
            id:'3',
            num:'1000+'
        },
    ]

    const text =[
        {
            id:1,
            text:"vercase "
        },
        {
            id:2,
            text:"Zara "
        },
        {
            id:3,
            text:"gucci "
        },
        {
            id:4,
            text:"prada "
        },
        {
            id:5,
            text:"calvin calin "
        },
    ]
    return (
      <div>
          <div className=' bg-[#F2F0F1]   flex flex-col md:flex-row ' >
            <div className='w-1/2 m-4 mt-4 flex items-center justify-center flex-col'>
          
                <h1 className='text-4xl  font-extrabold text-center uppercase '>Find Clothes <br /> that matches <br /> your style</h1>
      
              <button className='btn-lg bg-black mt-3 text-white rounded-full '>Shop now </button>
             <div className='grid m-4 grid-cols-3  text-4xl   gap-5  mt-4'>
             {
                data.map(data=><div className='border-r-2' key={data.id}> {data.num} </div> )
              }
             </div>
            </div>


            <div className='w-1/2'>
             <img src={banner} alt="" />
            </div>
        </div>
       <div className='bg-black h-[80px] text-center grid grid-cols-3 md:grid-cols-5 text-white text-4xl'> 
       {
            text.map(data=><div  className='flex justify-center items-center' key={data.id}> {data.text} </div>)
        }
       </div>
      </div>
    );
};

export default Home;