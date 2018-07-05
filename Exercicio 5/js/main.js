import {HP} from './HP.class.js';

const player = new HP(150, 50);
console.log(player.maxhp === 150);
console.log(player.hp === 150);
console.log(player.shield === 50);

player.damage(100);

console.log(player.maxhp === 150);
console.log(player.hp === 100);
console.log(player.shield === 0);
console.log(player.alive === true);

player.damage(100);

console.log(player.maxhp === 150);
console.log(player.hp === 0);
console.log(player.shield === 0);
console.log(player.alive === false);

player.rechargeShield(300); // Nao tem efeito pois o player esta morto

console.log(player.maxhp === 150);
console.log(player.hp === 0);
console.log(player.shield === 0);
console.log(player.alive === false);

player.heal(10); // Nao tem efeito pois o player esta morto

console.log(player.maxhp === 150);
console.log(player.hp === 0);
console.log(player.shield === 0);
console.log(player.alive === false);

const player2 = new HP(400, 500);

console.log(player2.maxhp === 400);
console.log(player2.hp === 400);
console.log(player2.shield === 500);
console.log(player2.alive === true);

player2.damage(600);

console.log(player2.maxhp === 400);
console.log(player2.hp === 300);
console.log(player2.shield === 0);
console.log(player2.alive === true);

player2.heal(50);
player2.rechargeShield(800);

console.log(player2.maxhp === 400);
console.log(player2.hp === 350);
console.log(player2.shield === 800);
console.log(player2.alive === true);

player2.heal(-40);// comando invalido, sem efeito
player2.rechargeShield(-500);// comando invalido, sem efeito
player2.damage(-4000);// comando invalido, sem efeito

console.log(player2.maxhp === 400);
console.log(player2.hp === 350);
console.log(player2.shield === 800);
console.log(player2.alive === true);

