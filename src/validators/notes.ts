import Joi from "joi";

export const getNotesValidator = {
    query: Joi.object().keys({
      userId: Joi.string().required(),
      search: Joi.string().optional(),
    }),
};

export const getNoteByIdValidator = {
    params: Joi.object().keys({
      noteId: Joi.string().required(),
    }),
};

export const createNoteValidator = {
    body: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      userId: Joi.string().required(),
      color: Joi.string().required(),
    }),
  };

export const updateNoteValidator = {
    params: Joi.object().keys({
      noteId: Joi.string().required(),
    }),
    body: Joi.object().keys({
      title: Joi.string().optional(),
      description: Joi.string().optional(),
    }),
  };

export const deleteNoteValidator = {
    params: Joi.object().keys({
      noteId: Joi.string().required(),
    }),
};