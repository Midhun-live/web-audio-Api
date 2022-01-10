const volume=document.getElementById('volume');
const bass=document.getElementById('bass');
const mid=document.getElementById('mid');
const treble=document.getElementById('treble');

const context= new AudioContext()

const setupContext=async ()=>{
    const user=await getAudio()
    if(context.state==='suspended')
        await context.resume()
    const src=context.createMediaStreamSource(user);
    src.connect(context.destination);    
}

const getAudio=()=>{
    return navigator.mediaDevices.getUserMedia({
        audio:{
            echoCancellation:false,
            autoGainControl:false,
            noiseSuppression:false,
            latency:0
        }
    })
}
setupContext();