export class General{
  controls: any;
  constructor (
    public id: number,
    public name: string,
    public surname: string,
    public phone: string,
    public email: string
  ) {}
}

export class Feedback {
  constructor(
    public message: string
  ) {}
}

export class Register {
  constructor(
    public cause: string
  ) {}
}

export class Testimonial {
  constructor (
    public comment: string
  ) {}
}