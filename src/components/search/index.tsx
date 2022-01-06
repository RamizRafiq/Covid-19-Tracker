import React, { useState, useEffect } from "react";
import {TextField, Box} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { http } from "../../services";

interface searchBoxTypes{
  value:string | null,
  setValue:Function
}

export default function SearchBox({value,setValue}:searchBoxTypes) {
  const [open, setOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<Array<any>>([]);
  const loading = open && options.length === 0;

  async function data() {
    const response = await http("https://disease.sh/v3/covid-19/countries");
    if (response) {
      setOptions([...response]);
    }
  }

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      data();
    }
  }, [open]);

  return (
    <Box mx="auto" width={'300px'}>
    <Autocomplete
      id="search-box"
      style={{ width: '300px', borderBottomColor:'#0A067B' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => {
        if (option?.country === value?.country) {
          return value?.country;
        }
      }}
      value={value}
      onChange={(c, v) => {
        setValue(v);
      }}
      getOptionLabel={(option) => {
        return option?.country;
      }}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Country"
          variant="standard"
          InputProps={{
            ...params.InputProps,

            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
    </Box>
  );
}
