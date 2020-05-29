export class Concert {
  private id: number;

  private artiste: string;

  private dateConcert: Date;

  private note: number;

  private genre: string;

  private idGenre: number;

  private salle: string;

  private idSalle: number;

  private commentaire: string;

  public getId(): number {
    return this.id;
  }

  public setId(id: number): Concert {
    this.id = id;
    return this;
  }

  public getArtiste(): string {
    return this.artiste;
  }

  public setArtiste(artiste: string): Concert {
    this.artiste = artiste;
    return this;
  }

  public getDateConcert(): Date {
    return this.dateConcert;
  }

  public setDateConcert(dateConcert: Date): Concert {
    this.dateConcert = dateConcert;
    return this;
  }

  public getNote(): number {
    return this.note;
  }

  public setNote(note: number): Concert {
    this.note = note;
    return this;
  }

  public getGenre(): string {
    return this.genre;
  }

  public setGenre(genre: string): Concert {
    this.genre = genre;
    return this;
  }

  public getIdGenre(): number {
    return this.idGenre;
  }

  public setIdGenre(idGenre: number): Concert {
    this.idGenre = idGenre;
    return this;
  }

  public getSalle(): string {
    return this.salle;
  }

  public setSalle(salle: string): Concert {
    this.salle = salle;
    return this;
  }

  public getIdSalle(): number {
    return this.idSalle;
  }

  public setIdSalle(idSalle: number): Concert {
    this.idSalle = idSalle;
    return this;
  }

  public getCommentaire(): string {
    return this.commentaire;
  }

  public setCommentaire(commentaire: string): Concert {
    this.commentaire = commentaire;
    return this;
  }

  fromJson(data) {
    this.id = data.id;
    this.artiste = data.artiste;
    this.commentaire = data.commentaire;
    this.dateConcert = new Date(data.dateConcert);
    this.note = data.note;
    if ("genre" in data) {
      this.genre = data.genre.nom;
      this.idGenre = data.genre.id;
    } else {
      this.idGenre = data.genreId;
    }
    if ("salle" in data) {
      this.salle = data.salle.nom;
      this.idSalle = data.salle.id;
    } else {
      this.idSalle = data.salleId;
    }
  }

  toJson() {
    console.log(this);
    const json = {
      id: this.id,
      artiste: this.artiste,
      commentaire: this.commentaire,
      dateConcert: this.dateConcert.toISOString(),
      note: this.note,
      genreId: this.idGenre,
      salleId: this.idSalle,
    };
    return json;
  }
}
