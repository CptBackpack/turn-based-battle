import $ from 'jquery';
import PlayerImageSource from '../../assets/tbb/player.jpg';
import EnemyImageSource from '../../assets/tbb/enemy.jpg';
import ActionButton from './ui/button';

export class Combat {
    constructor() {
        
    }

    setup (combatInstance) {
        this.combatInstance = combatInstance;
        getElements(this);
        fillImages(this);
        makeCommands(this, this.combatInstance);

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

        function makeCommands(parent, combatInstance)
        {
            let dummyCommands = [
                {
                    'type': 'normal',
                    'range': 'melee',
                    'damage': '5-10', 
                    'name': 'Slash',
                    'action': "new Combat().action('normal')",
                },
                {
                    'type': 'fire',
                    'range': 'ranged',
                    'damage': '1-20',
                    'name': 'Firebolt',
                    'action': "this.action('normal')",
                },
                {
                    'type': 'ice',
                    'range': 'ranged',
                    'damage': '7-15',
                    'name': 'Icepike',
                    'action': "this.action('normal')",
                },
                {
                    'type': 'earth',
                    'range': 'ranged',
                    'damage': '1-20',
                    'name': 'Tremor',
                    'action': "this.action('normal')",
                },
                {
                    'type': 'lightning',
                    'range': 'ranged',
                    'damage': '1-20',
                    'name': 'Skystake', 
                    'action': "this.action('normal')",
                }
            ];

            let commandsHtml = '';

            dummyCommands.forEach((item) => {
                // console.table(item);
                commandsHtml += ActionButton(item['name'], item['type'], item['damage'], item['action'], combatInstance);
            });

            parent.actionsElement.html(
                commandsHtml
            )
        }
    }


    action(type)
    {
        // return {
        //     'log' : ['Player deals 10 damage.', 'Enemy deals 5 damage'],
        // }

        console.log(type);
    }

}