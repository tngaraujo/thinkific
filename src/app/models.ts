export class question {
    question   :string;
    answers    :answer[];
    time       :number;
    link       :string;
}

export class video {
    youtubeid:string;
    thumbnail:string;
    description:string;
    url        :string;
    title      :string;
    action     :string;
    time       :number;
    questions  :question[];
}

export class answer {
  text:string;
  correct:boolean;
}

export class videolist{
    videos:video[];
}
