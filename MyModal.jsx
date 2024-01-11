import React,{useState} from 'react'
import ShowModal from './ShowModal'

export default function MyModal() {
const [showModal,setShowModal] = useState (false)

const CloseModal = () => setShowModal(false)


  return (
    <div>
      
        <button className='border py-2 px-2 bg-slate-600 rounded-xl text-white font-extrabold' onClick={()=> setShowModal(true)}>Open Modal</button>
        
        {showModal && <ShowModal CloseModal = {CloseModal} />} <br /><br /><br />
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A fugit illum, esse sint consectetur ea explicabo consequuntur veniam, non pariatur ullam perferendis excepturi molestias nulla ut quaerat asperiores laboriosam iure. 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quas laudantium nostrum adipisci cum eius tenetur veniam, consequatur sequi illum fuga aperiam ex dicta perferendis temporibus, labore earum hic non.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum eos in eaque. Ratione nisi animi aperiam sunt ad, alias adipisci ducimus unde quos voluptate iusto dolor at nemo molestiae.
      </p>
      <br /><br /><br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A fugit illum, esse sint consectetur ea explicabo consequuntur veniam, non pariatur ullam perferendis excepturi molestias nulla ut quaerat asperiores laboriosam iure.
      </p>
      <br /><br /><br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A fugit illum, esse sint consectetur ea explicabo consequuntur veniam, non pariatur ullam perferendis excepturi molestias nulla ut quaerat asperiores laboriosam iure.
      </p>
      <br /><br /><br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A fugit illum, esse sint consectetur ea explicabo consequuntur veniam, non pariatur ullam perferendis excepturi molestias nulla ut quaerat asperiores laboriosam iure.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A fugit illum, esse sint consectetur ea explicabo consequuntur veniam, non pariatur ullam perferendis excepturi molestias nulla ut quaerat asperiores laboriosam iure. 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quas laudantium nostrum adipisci cum eius tenetur veniam, consequatur sequi illum fuga aperiam ex dicta perferendis temporibus, labore earum hic non.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum eos in eaque. Ratione nisi animi aperiam sunt ad, alias adipisci ducimus unde quos voluptate iusto dolor at nemo molestiae.
      </p>
      <br /><br /><br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A fugit illum, esse sint consectetur ea explicabo consequuntur veniam, non pariatur ullam perferendis excepturi molestias nulla ut quaerat asperiores laboriosam iure.
      </p>
      <br /><br /><br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A fugit illum, esse sint consectetur ea explicabo consequuntur veniam, non pariatur ullam perferendis excepturi molestias nulla ut quaerat asperiores laboriosam iure.
      </p>
      <br /><br /><br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A fugit illum, esse sint consectetur ea explicabo consequuntur veniam, non pariatur ullam perferendis excepturi molestias nulla ut quaerat asperiores laboriosam iure.
      </p>
        </div>
  )
}
