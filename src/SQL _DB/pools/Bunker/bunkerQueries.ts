const BunkerQueries = {
	allProffesions: (): string => 'SELECT * from proffesion',
	randomProffesions: (id: number): string =>
		`SELECT * from proffesion SELECT * FROM proffesion WHERE id=${id} `,
};
