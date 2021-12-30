export class Student {
    constructor(score) {
        this.score = score
    }
    getScore() {
        return this.score
    }
}
export class ArtStudent {
    constructor(artScore) {
        this.artScore = artScore
    }
    getArtScore() {
        return this.artScore
    }
}

export class ArtStudentAdapter {
    constructor(artStudent) {
        this.artStudent = artStudent
    }
    getScore() {
        return this.artStudent.getArtScore()
    }
}
