export class Header {
  controls: any;
  constructor (
    public id: number,
    public name: string,
    public surname: string,
    public telephone: string,
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