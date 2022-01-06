

async function http(url:string){
  let res;

    res = await fetch(url);
  res =await res?.json();
  return res;
}

export default http