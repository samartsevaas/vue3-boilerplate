import mitt, { Emitter } from "mitt";

export type Events = {
  "ui-lock": boolean;
};

const ApplicationEmitter: Emitter<Events> = mitt<Events>();

export default ApplicationEmitter;
