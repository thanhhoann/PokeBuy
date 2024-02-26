import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "../../styles/Cart.module.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Cart(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalHandler = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div onClick={modalHandler}>
      <Modal
        open={open}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles["modal-container"]}>
            <div className={styles.title}>
              <section>
                <p>Your Cart</p>
              </section>
              <section>
                <svg
                  style={{ width: "30px", height: "30px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </section>
            </div>

            <div className={styles.total}>
              <section>
                <p>
                  Total:{" "}
                  <span>
                    <h1>$ 199</h1>
                  </span>
                </p>
              </section>
              <section>
                <p>Shipping & taxes calculated at checkout</p>
              </section>

              <div className={styles.checkout}>Checkout</div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
