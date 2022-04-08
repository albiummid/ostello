import { Box } from '@mui/system'
import React from 'react'
import { Modal } from '@mui/material'

export default function ModalComp({ children, open, setOpen, className }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
  }

  return (
    <div className={`bg-white`}>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={style}
          className='w-[344px] md:w-[724px] md:p-10 p-5  rounded-md'
        >
          {children}
        </Box>
      </Modal>
    </div>
  )
}
