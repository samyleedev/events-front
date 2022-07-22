import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  FormHelperText,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import "./CreateEventForm.scss";

const CreateEventForm = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [isFree, setIsFree] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then(({ data }) => {
        setCategories(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handlePriceSwitchChange = (e: any) => {
    setIsFree(e.target.checked);
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    control,
  } = useForm({
    mode: "onTouched",
  });

  return (
    <div className="CreateEventForm">
      <form action="">
        <div className="section">
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            variant="standard"
            id="email"
            label="Nom de l'évènement"
            // name="email"
            {...register("title")}
            // error={errors.email ? true : false}
            // helperText={errors.email?.message}
          />
        </div>
        <div className="section">
          <Controller
            name=""
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormControl error={errors.education_level ? true : false}>
                <InputLabel>Sélectionner une catégorie ...</InputLabel>
                <Select
                  style={{ width: 300 }}
                  value={value}
                  onChange={onChange}
                >
                  {categories.map((cat) => (
                    <MenuItem value={cat.id}>{cat.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </div>
        <div className="section">
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            variant="standard"
            id="email"
            label="Description"
            // name="email"
            {...register("description")}
            // error={errors.email ? true : false}
            // helperText={errors.email?.message}
          />
        </div>
        <div className="section">
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            variant="standard"
            id="email"
            label="Adresse"
            // name="email"
            {...register("address")}
            // error={errors.email ? true : false}
            // helperText={errors.email?.message}
          />
        </div>
        <div className="section">
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            variant="standard"
            id="zip_code"
            label="Code postal"
            // name="email"
            {...register("zip_code")}
            // error={errors.email ? true : false}
            // helperText={errors.email?.message}
          />
        </div>

        <div className="section">
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            variant="standard"
            id="city"
            label="Ville"
            // name="email"
            {...register("city")}
            // error={errors.email ? true : false}
            // helperText={errors.email?.message}
          />
        </div>
        <div className="section">
          <FormControlLabel
            onChange={handlePriceSwitchChange}
            control={<Switch defaultChecked />}
            label="Payant ?"
          />
        </div>
        {!isFree && (
          <div className="section">
            <TextField
              autoFocus
              fullWidth
              margin="dense"
              variant="standard"
              id="price"
              label="Prix"
              {...register("price")}
              // error={errors.email ? true : false}
              // helperText={errors.email?.message}
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateEventForm;
