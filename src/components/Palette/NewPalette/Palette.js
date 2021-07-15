import { useContext } from "react";
import UIContext from "../../../context/UIContext";
import clsx from "clsx";

import {useStyles} from './Palette.styles'

const Palette = () => {
    const { openDR } = useContext(UIContext);
    const classes = useStyles()
    return (
        <main
        className={clsx(classes.content, {
          [classes.contentShift]: openDR,
        })}
      >
        <div className={classes.drawerHeader} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates at voluptate suscipit praesentium ducimus eaque rem molestiae odit et libero, autem beatae veniam qui porro reiciendis blanditiis sapiente quibusdam magni consequuntur. Reiciendis, blanditiis, esse nam veniam possimus, doloremque hic quae maxime accusantium sit iusto perferendis quia minima enim dolorem. Sapiente laborum repellendus maiores officiis commodi, recusandae suscipit doloribus sequi dolor, saepe id soluta delectus voluptatibus provident atque adipisci necessitatibus dolore, laudantium fugit quaerat nam. Ipsum atque minus aperiam eius aut, consectetur alias repudiandae beatae rerum debitis distinctio excepturi doloremque delectus tempore dolor, cum vero obcaecati quisquam! Quia dignissimos quibusdam magnam.</p>
      </main>
    )
}

export default Palette
