<template>
    <div class="pagination">
        <ul class="pagination__links pagination__links--backward">
            <li class="pagination__link">
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                            d="M0.337891 0.212891V9.53711H1.5V0.212891H0.337891ZM8.08984 0.623047L4.24805 4.46484C4.12956 4.57422 4.07031 4.71094 4.07031 4.875C4.07031 5.03906 4.12956 5.17578 4.24805 5.28516L8.08984 9.12695C8.27214 9.30924 8.48177 9.35482 8.71875 9.26367C8.96484 9.16341 9.08789 8.98112 9.08789 8.7168V1.0332C9.08789 0.76888 8.96484 0.591146 8.71875 0.5C8.48177 0.39974 8.27214 0.440755 8.08984 0.623047Z" 
                            fill="#C3CDC9"
                        />
                    </svg>
                </a>
            </li>
            <li class="pagination__link">
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                        <path 
                            d="M0.498047 5.46484L4.91406 1.03516C5.10547 0.852865 5.31966 0.811849 5.55664 0.912109C5.79362 1.01237 5.91211 1.1901 5.91211 1.44531V10.3047C5.91211 10.5599 5.79362 10.7376 5.55664 10.8379C5.31966 10.9382 5.10547 10.8971 4.91406 10.7148L0.498047 6.28516C0.379557 6.17578 0.320312 6.03906 0.320312 5.875C0.320312 5.71094 0.379557 5.57422 0.498047 5.46484Z" 
                            fill="#C3CDC9"
                        />
                    </svg>
                </a>
            </li>
        </ul>

        <div class="pagination__pages">
            <span>Page</span>
            <input
                v-model="currentPage"
                class="pagination__pages-input" 
                type="number"
            >
            <span>of 1</span>
        </div>

        <ul class="pagination__links pagination__links--forward">
            <li class="pagination__link">
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                        <path 
                            d="M5.50195 5.46484L1.08594 1.03516C0.894531 0.852865 0.680339 0.811849 0.443359 0.912109C0.20638 1.01237 0.0878906 1.1901 0.0878906 1.44531V10.3047C0.0878906 10.5599 0.20638 10.7376 0.443359 10.8379C0.680339 10.9382 0.894531 10.8971 1.08594 10.7148L5.50195 6.28516C5.62044 6.17578 5.67969 6.03906 5.67969 5.875C5.67969 5.71094 5.62044 5.57422 5.50195 5.46484Z" 
                            fill="#C3CDC9"
                        />
                    </svg>
                </a>
            </li>
            <li class="pagination__link">
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path 
                            d="M9.66211 9.53711V0.212891H8.5V9.53711H9.66211ZM1.91016 9.12695L5.75195 5.28516C5.87044 5.17578 5.92969 5.03906 5.92969 4.875C5.92969 4.71094 5.87044 4.57422 5.75195 4.46484L1.91016 0.623047C1.72786 0.440755 1.51367 0.39974 1.26758 0.5C1.0306 0.591146 0.912109 0.76888 0.912109 1.0332V8.7168C0.912109 8.98112 1.0306 9.16341 1.26758 9.26367C1.51367 9.35482 1.72786 9.30924 1.91016 9.12695Z" 
                            fill="#C3CDC9"
                        />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentPage = ref(1)
</script>

<style scoped lang="scss">
.pagination {
    display: flex;
    align-content: center;
    column-gap: 8px;
    
    &__links {
        margin: 0;
        padding: 0;
    }
    
    &__link {
        display: inline-flex;

        a {
            padding: 0px 8px;
            cursor: pointer;
        }
    }

    &__pages {
        height: fit-content;
        display: flex;
        column-gap: 8px;
        font-size: 14px;
        font-weight: 400;
        color: #3C5B51;
        
        &-input {
             width: 48px;
        }
    }
}
</style>