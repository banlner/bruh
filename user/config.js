/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *      Quick Start
 * ---------------------
 *
 * 	> For detailed instructions, visit the GitHub repository and read the documentation:
 * 	https://github.com/eartharoid/DiscordTickets/wiki
 *
 * 	> IMPORTANT: Also edit the TOKEN in 'user/.env'
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Information: https://github.com/eartharoid/DiscordTickets/#readme
 * 	> Discord Support Server: https://go.eartharoid.me/discord
 * 	> Wiki: https://github.com/eartharoid/DiscordTickets/wiki
 *
 * ###############################################################################################
 */

module.exports = {
	prefix: '-',
	name: 'DiscordTickets',
	presences: [
		{
			activity: 'with your tickets',
			type: 'PLAYING'
		},
		{
			activity: 'with metrocar 4001',
			type: 'PLAYING'
		},
		{
			activity: 'for new tickets',
			type: 'WATCHING'
		}
	],
	append_presence: ' | %shelp',
	colour: '#009999',
	err_colour: 'RED',
	cooldown: 3,

	guild: '785637586370297886', // ID of your guild (REQUIRED)
	staff_role: '785671624770453514', // ID of your Support Team role (REQUIRED)

	tickets: {
		category: '786029101743734795', // ID of your tickets category (REQUIRED)
		send_img: true,
		ping: 'here',
		text: `Hello there, {{ tag }}!
		A member of the tyne and wear metro supervisions team will assist you shortly.
		In the mean time, please describe your issue in as much detail as possible, including player information if this is a player report`,
		pin: false,
		max: 3
	},

	transcripts: {
		text: {
			enabled: true,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://tickets.example.com',
		},
		channel: '786029434788118548' // ID of your archives channel
	},

	panel: {
		title: 'MyMetro Assistance',
		description: 'We offer a vast-range of assistance here at the Tyne and Wear metro, by reacting to this message it will get you straight into a direct channel with the staffing department who will assist you with your issues there.',
		reaction: '🧾'
	},

	storage: {
		type: 'sqlite'
	},

	logs: {
		files: {
			enabled: true,
			keep_for: 7
		},
		discord: {
			enabled: true,
			channel: '786029434788118548' // ID of your log channel
		}
	},

	debug: false,
	updater: true
};
