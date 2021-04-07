import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProp }) => {
      return <MenuItem key={id} {...otherProp} />;
    })}
  </div>
);

const mapState = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapState)(Directory);
