'use client';
import React from 'react';
import { CldUploadWidget,CldImage } from 'next-cloudinary';


interface Cloudinary{
    public_id:string; 
}

const UploadPage = () => {
    const [publicId,setPublicId] = React.useState('');
  return (
    <>
    {publicId && <CldImage src={publicId} width={270} height={180} alt='image'  />}
    <CldUploadWidget uploadPreset='p3btq0se' options={{sources:["local"],multiple:false , maxFiles:5}} onUpload={(result,widget) => {
        if(result.event !== 'success') return;
        const info = result.info as Cloudinary;
        setPublicId(info.public_id);
    }}>
        {({open}) => <button className='btn btn-primary' onClick={() => open()}>Upload</button>}
    </CldUploadWidget>
    </>
  )
}

export default UploadPage