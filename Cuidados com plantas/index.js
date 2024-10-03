//Arrays de objetos para criar um aplicativo de cuidados com plantas
const plantas = [
    {
        nome: "Pothos",
        identificacao: "Planta trepadeira de folhas verdes",
        cuidados: {
            rega: "Uma vez por semana",
            luz: "Luz indireta",
            umidade: "Baixa",
        },
        desafio: "Fazer a planta crescer mais de 1 metro em 6 meses.",
        doencas: {
            nome: "Folhas amarelas",
            causa: "Excesso de água",
            remedio: "Reduzir a rega.",
        }
    },
    {
        nome: "Cacto",
        identificacao: "Planta suculenta, ideal para ambientes secos",
        cuidados: {
            rega: "Uma vez a cada 15 dias",
            luz: "Luz direta",
            umidade: "Muito baixa",
        },
        desafio: "Fazer florescer na primavera.",
        doencas: {
            nome: "Pintas marrons",
            causa: "Infestação de cochonilhas",
            remedio: "Aplicar inseticida.",
        }
    },
    {
        nome: "Orquídea",
        identificacao: "Planta de flores exóticas e variadas",
        cuidados: {
            rega: "A cada 5 dias",
            luz: "Luz indireta alta",
            umidade: "Média",
        },
        desafio: "Fazer a orquídea florescer duas vezes em um ano.",
        doencas: {
            nome: "Folhas murchas",
            causa: "Falta de água",
            remedio: "Aumentar a rega.",
        }
    }
];