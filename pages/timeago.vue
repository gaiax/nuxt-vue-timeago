<template>
    <div>
        <div class="box" data-title="Output" v-if="date">
            <timeago :datetime="date" :auto-update="60"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: new Date()
        }
    }
}
</script>
