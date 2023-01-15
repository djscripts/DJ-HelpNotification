# DJ-HelpNotification
TextUI básico desarrollado por DaniJim#0001

Discord para más info y scripts --> https://discord.gg/gT7RYMtQkZ

[![TextUI.png](https://i.postimg.cc/0rggxyyb/TextUI.png)](https://postimg.cc/1VK7rP6Q)


-- EXPORTS --

``exports['DJ-HelpNotification']:Open(message)``

``exports['DJ-HelpNotification']:Close()``



Si quieres incluirlo en el es_extended, ve al directorio "es_extended>client>functions.lua" y pon las siguientes funciones:

``function ESX.TextUI(message)
        exports['DJ-HelpNotification']:Open(message)
end``


``function ESX.HideUI()
        exports['DJ-HelpNotification']:Close()
end``
