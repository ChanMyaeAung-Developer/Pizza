import React from 'react'
import { BiMailSend } from "react-icons/bi";
import List from './List';
import { useState } from 'react';
const ListButton = () => {
    	const [isModalOpen, setIsModalOpen] = useState(false);
          const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div>ListButton
<div className="text-right">								
					<button 
						onClick={toggleModal}
						className="relative btn btn-filled-primary font-semibold"
					>
						<BiMailSend className="icon-content" />
						<span className="hidden lg:inline">Send email</span>
					</button> 
													</div>

        {isModalOpen && (<List isOpen={isModalOpen} onClose={toggleModal} />)}
    </div>
  )
}

export default ListButton
