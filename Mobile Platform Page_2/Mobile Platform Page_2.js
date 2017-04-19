$("document").ready
(
    function()
    {
        /* Start Of Main List */
        $("#Menu").click
        (
         function()
            {
                $(".Nav").toggle();
            }
        );
        /* End Of Main List */
                /* Start Of Sub Lists */
        /* Start Of Category List */ 
        $("#Category").hover
        (
         function()
            {
                $("#CategoryList").toggle();
            }
        );
        $("#CategoryList").hover
        (
         function()
            {
                $(this).toggle();
            }
        );
        /* End Of Category List */
        /* Start Of Account List */ 
        $("#Acc").hover
        (
         function()
            {
                $("#AccList").toggle();
            }
        );
        $("#AccList").hover
        (
         function()
            {
                $(this).toggle();
            }
        );
        /* End Of Account List */
        /* Start Of Services List */ 
        $("#Ser").hover
        (
         function()
            {
                $("#SerList").toggle();
            }
        );
        $("#SerList").hover
        (
         function()
            {
                $(this).toggle();
            }
        );
        /* End Of Services List */
        /* Start Of Reach Us List */ 
        $("#Re").hover
        (
         function()
            {
                $("#ReList").toggle();
            }
        );
        $("#ReList").hover
        (
         function()
            {
                $(this).toggle();
            }
        );
        /* End Of Category List */
                /* End Of Sub Lists */
    }
)