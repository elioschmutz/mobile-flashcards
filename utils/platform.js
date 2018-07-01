import { Platform } from 'react-native'

export const select = (ios, android) => Platform.OS === 'ios' ? ios : android
