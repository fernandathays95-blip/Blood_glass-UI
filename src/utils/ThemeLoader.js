// Simula a leitura do arquivo JSON (em um OS real, seria um loader de arquivos)
import systemProps from '../assets/theme/system_props.json';

// Cache para evitar re-leitura
const themeCache = systemProps.ui_theming;
const iconCache = systemProps.icon_set;

/**
 * Fornece valores de propriedades da UI de forma consistente.
 */
export const ThemeLoader = {
    // Acessa as cores
    getColor: (key) => {
        return themeCache.color_palette[key] || themeCache.color_palette.text_primary;
    },

    // Acessa configurações de estilo
    getStyle: (key) => {
        return themeCache[key];
    },

    // Obtém o nome do arquivo SVG para um ID de ícone
    getIconFile: (iconId) => {
        const iconEntry = iconCache.icon_list.find(icon => icon.id === iconId);
        return iconEntry ? iconEntry.file : 'ic_default_questionmark.svg';
    },

    // Obtém todas as configurações de efeito de vidro
    getGlassConfig: () => {
        return themeCache.glass_effect;
    }
};

// Exemplo de uso: console.log(ThemeLoader.getColor('accent_primary')); // Output: #BF0A30
