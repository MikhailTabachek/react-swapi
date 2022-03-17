// const PilotList = () => {

//   const pilotUrls = [
//     "https://swapi.dev/api/people/13/", 
//     "https://swapi.dev/api/people/14/", 
//     "https://swapi.dev/api/people/25/", 
//     "https://swapi.dev/api/people/31/",
//   ]

  async function getPilots(urls) {
    const promises = urls.map(url => fetch(url)
    .then(res => res.json()))
    console.log("This text",promises);
    const pilotObjects = await Promise.all(promises)
    return pilotObjects
  }

  // getPilots(pilotUrls).then(pilots => console.log(pilots))
  // return ( 
  //   <>
  //   <h6>This is a pilot list!</h6>
  //   </>
  // );


export default getPilots;