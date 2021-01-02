export interface IProfile {
    onLogout: () => void
    onLoadProfile: () => Promise<void>
}
