import {useDispatch} from "react-redux"
import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { filterPub } from "../JS/actions/pub";
import { Button } from "react-bootstrap";
const Filter = ({ setSearched,searched }) => {
    const dispatch = useDispatch()
  return (
    <div className="Filter">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search for a pub"
          onChange={(e) => {
            e.target.value === ""
              ? setSearched("")
              : setSearched(e.target.value);
          }}
          className=" mr-sm-2"
        />
        <Button
          type="submit"
          className="button"
          defaultValue="Sign In"
          onClik={() => dispatch(filterPub())}
        >  
          click
        </Button>
      </Form>
    </div>
  );
};

export default Filter;
