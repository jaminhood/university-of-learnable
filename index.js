class Animal {
	#name = ``
	#type = ``

	constructor(name) {
		this.#name = name
	}

	getName() {
		return this.#name
	}

	getType() {
		return this.#type
	}

	setName(name) {
		this.#name = name
	}

	setType(type) {
		this.#type = type
	}

	regulateHeat() {
		if (this.#type.toLowerCase() === `cold-blooded`) {
			console.log(`Changing environment to regulate heat!.`)
			return this
		}

		console.log(`Regulating heat!.`)
		return this
	}
}

class BackBoneAnimals extends Animal {
	constructor(name, type) {
		super(name)
		this.setType(type)
	}

	walk() {
		console.log(`Changing position by foot!.`)
		return this
	}
}

class NonBackBoneAnimals extends Animal {
	constructor(name, type) {
		super(name)
		this.setType(type)
	}

	crawl() {
		console.log(`Changing position by crawling!.`)
		return this
	}
}

const anthropoda = new BackBoneAnimals(`Anthropoda`, `Cold-Blooded`)
const fish = new NonBackBoneAnimals(`Fish`, `Cold-Blooded`)
const amphibia = new NonBackBoneAnimals(`Amphibia`, `Cold-Blooded`)
const reptile = new NonBackBoneAnimals(`Reptile`, `Cold-Blooded`)
const aves = new NonBackBoneAnimals(`Aves`, `Warm-Blooded`)
const mammals = new NonBackBoneAnimals(`Mammals`, `Warm-Blooded`)

anthropoda.regulateHeat().walk()
fish.regulateHeat().crawl()
amphibia.regulateHeat().crawl()
reptile.regulateHeat().crawl()
aves.regulateHeat().crawl()
mammals.regulateHeat().crawl()
