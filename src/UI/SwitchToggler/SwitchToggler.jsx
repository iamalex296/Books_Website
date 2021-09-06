import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import Brightness5RoundedIcon from "@material-ui/icons/Brightness5Rounded";

const SwitchToggler = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <FormControlLabel
        style={{
          color: `${state.checkedB ? "#3f51b5" : "#707070"}`,
          paddingRight: "15px",
          borderRight: "1px solid grey",
        }}
        control={
          <>
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
            {state.checkedB ? (
              <Brightness4RoundedIcon />
            ) : (
              <Brightness5RoundedIcon />
            )}
          </>
        }
      />
    </>
  );
};

export default SwitchToggler;
