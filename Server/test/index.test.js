const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('name');
            expect(response.body).toHaveProperty('species');
            expect(response.body).toHaveProperty('gender');
            expect(response.body).toHaveProperty('status');
            expect(response.body).toHaveProperty('origin');
            expect(response.body).toHaveProperty('image');
          });
      
          it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/999999').expect(404);
          });
    });

    describe('GET /rickandmorty/login', () => {
        it('Devuelve access: true si los datos son correctos', async () => {
            const userData = { email: 'polismai@gmail.com', password: 'asd123' };
            const response = await agent.get('/rickandmorty/login').query(userData);
            expect(response.body).toEqual({ access: true });
        });
        
        it('Devuelve access: false si los datos son incorrectos', async () => {
            const userData = { email: 'emailincorrecto@dominio.com', password: 'contraseñaincorrecta' };
            const response = await agent.get('/rickandmorty/login').query(userData);
            expect(response.body).toEqual({ access: false });
        });
    });

    describe('POST /rickandmorty/fav', () => {
        it('Devuelve un arreglo con el elemento enviado por body', async () => {
          const character = { id: 1, name: 'Rick Sanchez', species: 'Human', gender: 'Male', status: 'Alive', origin: 'Earth (C-137)', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' };
          const response = await agent.post('/rickandmorty/fav').send({character});
          expect(response.body).toBeInstanceOf(Array);
          expect(response.body).toContainEqual(character);
        });
      
        it('Devuelve un arreglo que incluye el nuevo elemento y los elementos previamente enviados', async () => {
          // Limpio la memoria de los personajes
          await agent.delete('/rickandmorty/fav/1')
          const character1 = { id: 1, name: 'Rick Sanchez', species: 'Human', gender: 'Male', status: 'Alive', origin: 'Earth (C-137)', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' };
          const character2 = { id: 2, name: 'Morty Smith', species: 'Human', gender: 'Male', status: 'Alive', origin: 'Earth (C-137)', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' };
          await agent.post('/rickandmorty/fav').send({character: character1});
          const response = await agent.post('/rickandmorty/fav').send({character: character2});
          expect(response.body).toEqual([character1, character2]);
        });
    });
    
    describe('DELETE /rickandmorty/fav/:id', () => {
        it('Devuelve un arreglo con los elementos previos sin modificar si el ID no existe', async () => {
            // Limpio la memoria de los personajes
            await agent.delete('/rickandmorty/fav/1')
            await agent.delete('/rickandmorty/fav/2')
            const initialFavorites = { id: 1, name: 'Rick Sanchez', species: 'Human', gender: 'Male', status: 'Alive', origin: 'Earth (C-137)', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' };
            await agent.post('/rickandmorty/fav').send({character: initialFavorites});
            const response = await agent.delete('/rickandmorty/fav/2');
            expect(response.body).toEqual([initialFavorites]);
        });
          
        it('Elimina correctamente al personaje cuando se envía un ID válido', async () => {
            // Limpio la memoria de los personajes
            await agent.delete('/rickandmorty/fav/1')
            const character1 = { id: 1, name: 'Rick Sanchez', species: 'Human', gender: 'Male', status: 'Alive', origin: 'Earth (C-137)', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' };
            const character2 = { id: 2, name: 'Morty Smith', species: 'Human', gender: 'Male', status: 'Alive', origin: 'Earth (C-137)', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' };
            await agent.post('/rickandmorty/fav').send({character: character1});
            await agent.post('/rickandmorty/fav').send({character: character2});
            const response = await agent.delete('/rickandmorty/fav/2');
            expect(response.body).toEqual([character1]);
        });
    });
});

