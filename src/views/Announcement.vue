<template>
<main>
    <div class="top-container">
        <h1 class="bg-title">Announcements</h1>
        <div class="inventory">
            <span class="material-icons">newspaper</span>
            <span class="text">Announcements</span>
            <hr>
        </div>
    </div>
</main>
</template>

<script>

</script>

<style>
.bg-title{
    z-index: -1;
    position: absolute;
    opacity: 10%;
    margin-top: -40px;
    font-size: 100px;
    font-family: Impact, fantasy;
}
.top-container{
    display: flex;
    margin: 0.5rem;
    .inventory{
        flex: 1;
        
        .material-icons{
            color: var(--dark);
            font-size: 2.5rem;
        }
        .text{
            position: relative;
            color: var(--dark);
            font-size: 1.5rem;
            font-weight: 900;
            bottom: 0.6rem;
            left: 0.5rem;
        }
    }

} 
</style>