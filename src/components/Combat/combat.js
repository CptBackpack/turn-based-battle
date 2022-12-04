import $ from 'jquery';
import PlayerImageSource from '../../assets/tbb/player.jpg';
import EnemyImageSource from '../../assets/tbb/enemy.jpg';
export class Combat {

    actionsElement;
    logElement;
    playerElement;
    enemyElement;

    constructor() {
        
    }

    setup () {
        getElements(this);
        fillImages(this);
        return getCommands();

        function getElements(parent)
        {
            parent.actionsElement = $('#actions');
            parent.logElement = $('#log');
            parent.playerElement = $('#player');
            parent.enemyElement = $('#enemy');
        }

        function fillImages(parent)
        {
            let playerImage = '<img src ="'+PlayerImageSource+'" width = "137" height = "320"/>';
            let enemyImage = '<img src ="'+EnemyImageSource+'" width = "137" height = "320"/>';
            
            parent.playerElement.html(playerImage);
            parent.enemyElement.html(enemyImage);
        }

        function getCommands()
        {
            let dummyCommands = [
                {
                    'id': 0,
                    'type': 'normal',
                    'range': 'melee',
                    'damage': '5-10', 
                    'name': 'Slash',
                    'action': "action('normal')",
                },
                {
                    'id': 1,
                    'type': 'normal',
                    'range': 'melee',
                    'damage': '5-10', 
                    'name': 'Shield Bash',
                    'action': "action('normal')",
                },
                {
                    'id': 'break',
                },
                {
                    'id': 2,
                    'type': 'fire',
                    'range': 'ranged',
                    'damage': '1-20',
                    'name': 'Firebolt',
                    'action': "this.action('normal')",
                },
                {
                    'id': 3,
                    'type': 'ice',
                    'range': 'ranged',
                    'damage': '7-15',
                    'name': 'Icepike',
                    'action': "this.action('normal')",
                },
                {
                    'id': 4,
                    'type': 'earth',
                    'range': 'ranged',
                    'damage': '1-20',
                    'name': 'Tremor',
                    'action': "this.action('normal')",
                },
                {
                    'id' : 5,
                    'type': 'lightning',
                    'range': 'ranged',
                    'damage': '1-20',
                    'name': 'Skystake', 
                    'action': "this.action('normal')",
                }
            ];

            return dummyCommands;
        }
    }


    action(type)
    {
        return {
            'log' : ['Player deals 10 ' + type + ' damage.', 'Enemy deals 5 damage'],
        }
    }

}