import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdRemoveRedEye } from "react-icons/md";
import api from '../lib/axios';

export default function AlertDialog(props) {
    const { location, title, id, city, participantsMax, alcoholAllowed, cigarettesAllowed, description, participantsCur } = props.company
    const [mail, setMail] = React.useState('')

    const [open, setOpen] = React.useState(false);

    async function sendMail() {
        try {
            const dataToServer = {
                email: mail
            };
            const { data } = await api.post(`/api/v1/groups/${id}/join`, dataToServer);
            if (!data) {
                
            }
            return data;
        } catch (error) {
            // toast.error(errorToShow);
        } finally {
            console.log(mail)
            setMail('')
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
      <MdRemoveRedEye onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }} >
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <strong>Адрес:</strong> <div className="desc__text">{location}</div>
            <strong>Город:</strong> <div className="desc__text">{city}</div>
            <strong>Макс. кол-во людей:</strong> <div className="desc__text">{participantsMax}</div>
            <strong>Кол-во людей сейчас:</strong> <div className="desc__text">{participantsCur}</div>
            <strong>Курение:</strong> <div className="desc__text">{cigarettesAllowed ? 'Приветсвется' : 'Не приветсвуется'}</div>
            <strong>Алкоголь:</strong> <div className="desc__text">{alcoholAllowed ? 'Приветсвется' : 'Не приветсвуется'}</div>
            <strong>Описание:</strong> <div className="desc__text">{description}</div>
          </DialogContentText>
          <div className="input-group mt-3">
            {
              participantsMax === participantsCur ? <div className="full-company">На данный момент группа набрана</div> : (
              <>
                <input value={mail} onChange={event => setMail(event.target.value)} type="text" className="form-control" placeholder="Введите почту" />
                <div className="input-group-append">
                    <button onClick={sendMail} className="btn" type="button" disabled={!mail}>Присоединиться</button>
                </div>
              </>
              )
            }
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}