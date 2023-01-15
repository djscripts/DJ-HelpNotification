function Open(message)
	SendNUIMessage({
		action = 'open',
		message = message,
	})
end

function Close()
	SendNUIMessage({
		action = 'close'
	})
end

RegisterNetEvent('DJ-HelpNotification:Open')
AddEventHandler('DJ-HelpNotification:Open', function(message)
	Open(message)
end)

RegisterNetEvent('DJ-HelpNotification:Close')
AddEventHandler('DJ-HelpNotification:Close', function()
	Close()
end)